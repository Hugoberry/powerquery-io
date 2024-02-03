---
title: Html.Table
---

# Html.Table


## Description

Vraća tabelu koja sadrži rezultate pokretanja navedenih CSS selektora u odnosu na obezbeđeni HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Vraća tabelu sa rezultatima pokretanja navedenih CSS selektora za navedeni <code>html</code>. Opcionalni parametar zapisa, <code>options</code>, može se navesti za dodatna svojstva. Zapis može da sadrži sledeća polja:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Vraća tabelu uzorka html tekstualne vrednosti.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Upravljač</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Izdvaja sve href stavke iz tekstualne vrednosti uzorka html veze.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Pristup podacima
