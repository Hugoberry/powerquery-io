---
title: Html.Table
---

# Html.Table


## Description

Pateikia lentelę, kurioje yra nurodytų CSS išrinkiklių paleidimo pagal pateiktą HTML rezultatai.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Pateikiama nurodytų CSS išrinkiklių vykdymo pagal pateiktą <code>html</code> rezultatų lentelė. Norint nurodyti papildomas ypatybes galima nurodyti pasirenkamą įrašo parametrą <code>options</code>. Įraše gali būti šie laukai:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Pateikiama lentelė iš pavyzdinės HTML teksto reikšmės.
```powerquery
Html.Table("<div class=""name"">Džo</div><span>vadovas</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector = ".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Išskleidžia visas href nuorodas iš html teksto reikšmės pavyzdžio.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Pasiekiami duomenys
