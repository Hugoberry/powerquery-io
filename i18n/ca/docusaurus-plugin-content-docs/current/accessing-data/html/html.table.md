---
title: Html.Table
---

# Html.Table


Retorna una taula que conté els resultats de l'execució dels selectors CSS especificats amb l'HTML proporcionat.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Torna una taula que conté els resultats d'executar els selectors CSS especificats amb l'element `html` proporcionat. És possible facilitar un paràmetre de registre opcional (`options`) per especificar propietats addicionals. El registre pot contenir els següents camps:

-   `RowSelector`


## Examples

### Example #1
Torna una taula a partir d'un valor de text HTML de mostra.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2
Permet extreure els valors HREF d'un valor de text HTML d'exemple.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
