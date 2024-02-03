---
title: Html.Table
---

# Html.Table


## Description

Atgriež tabulu, kurā ir ietverti norādīto CSS atlasītāju palaišanas rezultāti norādītajā HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Atgriež tabulu, kas satur rezultātus, kuri iegūti, palaižot norādītos CSS atlasītājus nodrošinātajā parametrā <code>html</code>. Lai norādītu papildu rekvizītus, var tikt nodrošināts neobligāts ieraksta parametrs <code>options</code>. Ieraksts var saturēt šādus laukus:    <ul><li><code>RowSelector</code></li></ul>


## Examples

### Example #1 
Atgriež tabulu no HTML teksta parauga vērtības.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Izvelk visus HREF atribūtus no HTML teksta vērtības parauga.
```powerquery
Html.Table("<a href=""/test.html"">Tests</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Piekļuve datiem
