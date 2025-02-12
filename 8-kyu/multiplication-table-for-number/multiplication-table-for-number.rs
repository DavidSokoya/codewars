fn multi_table(n: u64) -> String {
    let mut result = String::new();
    for i in 1..11 {
        result.push_str(&format!("{} * {} = {}", i, n, i*n));
            
        if i !=10 {
            result.push_str("\n");
         }
    }
        result
}
​
​