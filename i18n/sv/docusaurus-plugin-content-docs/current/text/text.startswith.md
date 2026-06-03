---
title: Text.StartsWith
---

# Text.StartsWith


Anger om texten börjar med ett angivet värde.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Returnerar sant om textvärdet `text` börjar med textvärdet `substring`.

-   `text`: Ett `text` värde som ska sökas igenom.
-   `substring`: Ett `text`\-värde som är delsträngen som ska sökas efter i `text`.
-   `comparer`: *(Valfritt)* En `Comparer` som används för att kontrollera jämförelsen. Till exempel kan `Comparer.OrdinalIgnoreCase` användas för att utföra skiftlägesokänsliga sökningar.

`comparer` är en `Comparer` som används för att styra jämförelsen. Jämförelseverktyg kan användas för att tillhandahålla skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser.

Följande inbyggda jämförelseverktyg är tillgängliga på formelspråket:

-   `Comparer.Ordinal`: Används för att utföra en exakt ordningstalsjämförelse.
-   `Comparer.OrdinalIgnoreCase`: Används för att utföra en exakt skiftlägesokänslig jämförelse.
-   `Comparer.FromCulture`: Används för att utföra en kulturmedveten jämförelse.


## Examples

### Example #1
Kontrollera om texten "Hello, World" börjar med texten "hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Kontrollera om texten "Hello, World" börjar med texten "Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Om du ignorerar skiftläge kontrollerar du om texten "Hello, World" börjar med texten "hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
