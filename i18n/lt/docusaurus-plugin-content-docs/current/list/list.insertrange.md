---
title: List.InsertRange
---

# List.InsertRange


Į sąrašą įterpiamos reikšmės nurodytame indekse.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Pateikiamas naujas sąrašas, sukurtas įterpiant `values` reikšmes į `list`, `index`. Pirmoji sąrašo vieta yra 0 indekse.

-   `list`: paskirties sąrašas, į kurį turi būti įterptos reikšmės.
-   `index`: paskirties sąrašo indeksas(`list`), kur turi būti įterptos reikšmės. Pirmoji sąrašo vieta yra 0 indekse.
-   `values`: reikšmių, kurios turi būti įterptos į `list`, sąrašas.


## Examples

### Example #1
Įterpkite sąrašą (\{3, 4\}) į paskirties sąrašą (\{1, 2, 5\}) 2 indekse.
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
Įterpkite sąrašą su įdėtuoju sąrašu (\{1, \{1.1, 1.2\}\}) į paskirties sąrašą (\{2, 3, 4\}) 0 indekse.
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
