// src-tauri/src/lib.rs
use serde::Serialize;


#[derive(Serialize)]
#[serde(rename_all = "camelCase")]

struct TaskSummary {
    normalized_title: String,
    character_count: usize,
}

#[tauri::command]
fn analyze_task(title: String) -> Result<TaskSummary, String> {

    let normalized = title.trim();
    if normalized.is_empty() {
        return Err("Task title cannot be empty".into());
    }
    if normalized.chars().count() > 120 {
        return Err("Task title must be 120 characters or fewer".into());
    }
    
    Ok(TaskSummary {
    normalized_title: normalized.to_owned(),
    character_count: normalized.chars().count(),
    })

}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![analyze_task])
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
