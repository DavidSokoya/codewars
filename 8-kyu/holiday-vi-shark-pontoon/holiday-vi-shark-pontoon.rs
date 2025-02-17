fn shark(pontoon_distance: f64, shark_distance: f64, you_speed: f64, shark_speed: f64, dolphin: bool) -> String {
      let effective_shark_speed = if dolphin { shark_speed / 2.0 } else { shark_speed };
    let your_time = pontoon_distance / you_speed;
    let shark_time = shark_distance / effective_shark_speed;
    
    if your_time < shark_time {
        "Alive!".to_string()
    } else {
        "Shark Bait!".to_string()
    }
}