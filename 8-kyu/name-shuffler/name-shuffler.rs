fn name_shuffler(s: &str) -> String {
   let names: Vec<&str> = s.split_whitespace().collect();
    format!("{} {}", names[1], names[0])
}