---
title: List.Difference
---

# List.Difference


Pateikiamas dviejų nurodytų sąrašų skirtumas.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Pateikiami sąrašo elementai `list1`, kurių nėra sąraše `list2`. Palaikomos pasikartojančios reikšmės. Pasirenkama lygties kriterijų reikšmė, `equationCriteria`, gali būti nurodyta norint valdyti lygybės bandymą.


## Examples

### Example #1
Rasti sąrašo elementus \{1, 2, 3, 4, 5\}, kurie nerodomi \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Rasti sąrašo elementus \{1, 2\}, kurie nerodomi \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
