---
title: List.Union
---

# List.Union


Pateikiamas įvestyje rastų sąrašo reikšmių junginys.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Imamas sąrašų `lists` sąrašas, sujungiami atskirų sąrašų elementai ir pateikiami išvesties sąraše. Rezultatas – pateiktame sąraše yra visi elementai iš visų įvesties sąrašų. Ši operacija palaiko tradicinę dublikatų semantiką, todėl reikšmių dublikatai yra pritaikomi kaip sujungimo dalis. Pasirenkama lygties kriterijų reikšmė, `equationCriteria`, gali būti nurodyta norint valdyti lygybės bandymą.


## Examples

### Example #1
Sukurkite sąrašo \{1..5\}, \{2..6\}, \{3..7\} junginį.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
