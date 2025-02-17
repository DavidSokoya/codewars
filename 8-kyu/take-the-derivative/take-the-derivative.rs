fn derive(coefficient: u32, exponent: u32) -> String {
     let new_coefficient = coefficient * exponent;
    let new_exponent = exponent - 1;
    format!("{}x^{}", new_coefficient, new_exponent)
}
​