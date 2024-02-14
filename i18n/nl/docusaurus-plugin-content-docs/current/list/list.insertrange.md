---
title: List.InsertRange
---

# List.InsertRange


Voegt waarden in de lijst bij de opgegeven index in.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Retourneert een nieuwe lijst die ontstaat door het invoegen van de waarden in <code>values</code> in <code>list</code> bij <code>index</code>. De eerste positie in de lijst is bij index 0.      <ul>        <li><code>list</code>: De doellijst waar de waarden moeten worden ingevoegd.</li>        <li><code>index</code>: De index van de doellijst (<code>list</code>) waar de waarden moeten worden ingevoegd. De eerste positie in de lijst is bij index 0.</li>        <li><code>values</code>: De lijst met waarden die moet worden ingevoegd in <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Voegt de lijst (\{3, 4}) in de doellijst (\{1, 2, 5}) bij index 2 in.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
Voegt een lijst met een geneste lijst (\{1, \{1.1, 1.2}}) in de doellijst (\{2, 3, 4}) bij index 0 in .
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
