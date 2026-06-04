---
title: List.InsertRange
---

# List.InsertRange


Értékeket szúr be egy listába a megadott indexnél.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Új listát ad vissza, amely úgy készült, hogy a(z) `values` értékeit beilleszti a(z) `list` listába `index` index által megadott pozícióba. A lista első pozíciója a 0. index.

-   `list`: a céllista, ahová az értékeket be kell szúrni
-   `index`: a céllista (`list`) azon indexe, ahová az értékeket be kell szúrni A lista első pozíciója a 0. index.
-   `values`: a(z) `list` listába beszúrandó értékek listája


## Examples

### Example #1
A (\{3, 4\}) lista beszúrása az (\{1, 2, 5\}) céllistába a 2. indexnél.
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
Beágyazott listát is tartalmazó lista (\{1, \{1.1, 1.2\}\}) beszúrása a (\{2, 3, 4\}) céllistába, a 0. indexnél.
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
