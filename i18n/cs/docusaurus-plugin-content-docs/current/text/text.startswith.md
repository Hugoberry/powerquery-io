---
title: Text.StartsWith
---

# Text.StartsWith


Značí, zda text začíná zadanou hodnotou.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Vrátí hodnotu True, pokud textová hodnota `text` začíná textovou hodnotou `substring`.

-   `text`: Hodnota typu `text`, která se má prohledávat.
-   `substring`: Hodnota typu `text`, což je podřetězec, který se má vyhledat v `text`
-   `comparer`: *(Volitelné)* Porovnávač `Comparer`, který slouží k řízení porovnání. Například `Comparer.OrdinalIgnoreCase` lze použít k hledání bez rozlišování malých a velkých písmen.

`comparer` je porovnávač `Comparer`, který slouží k řízení porovnání. Porovnávače Comparer lze používat k porovnání bez rozlišování malých a velkých písmen nebo s rozlišováním jazykové verze a národního prostředí.

V jazyce vzorců jsou k dispozici následující integrované porovnávače:

-   `Comparer.Ordinal`: Používá se k přesnému porovnání pořadí.
-   `Comparer.OrdinalIgnoreCase`: Používá se k provádění přesného porovnání bez rozlišování velkých a malých písmen.
-   `Comparer.FromCulture`: Používá se k provádění porovnání s rozlišením jazykové verze.


## Examples

### Example #1
Zjistí, zda text Hello, World začíná textem hello.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Zjistí, zda text Hello, World začíná textem Hello.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Zjistí, zda text „Hello, World“ začíná textem „hello“. Ignorují se velká a malá písmena.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
