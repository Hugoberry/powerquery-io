---
title: Html.Table
---

# Html.Table


## Description

Retorna una taula que conté els resultats de l&#39;execució dels selectors CSS especificats amb l&#39;HTML proporcionat.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Torna una taula que conté els resultats d'executar els selectors CSS especificats amb l'element <code>html</code> proporcionat. És possible facilitar un paràmetre de registre opcional (<code>options</code>) per especificar propietats addicionals. El registre pot contenir els següents camps:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Torna una taula a partir d&#39;un valor de text HTML de mostra.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Permet extreure els valors HREF d&#39;un valor de text HTML d&#39;exemple.
```powerquery
Html.Table("<a href=""/test.html"">Prova</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accés a les dades
