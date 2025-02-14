use std::collections::HashMap;
​
fn get_drink_by_profession(param: &str) -> &'static str {
    let mut drinks = HashMap::new();
    drinks.insert("jabroni", "Patron Tequila");
    drinks.insert("school counselor", "Anything with Alcohol");
    drinks.insert("programmer", "Hipster Craft Beer");
    drinks.insert("bike gang member", "Moonshine");
    drinks.insert("politician", "Your tax dollars");
    drinks.insert("rapper", "Cristal");
​
    let key = param.to_lowercase(); // Convert input to lowercase
    drinks.get(key.as_str()).unwrap_or(&"Beer")
}