---
title: Html.Table
---

# Html.Table


## Description

Restituisce una tabella contenente i risultati dell&#39;esecuzione dei selettori CSS specificati rispetto al codice HTML specificato.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Restituisce una tabella che contiene i risultati dell'esecuzione dei selettori CSS specificati sull'elemento <code>html</code> fornito. È possibile fornire un parametro di record facoltativo, <code>options</code>, per specificare proprietà aggiuntive. Il record può contenere i campi seguenti:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Restituisce una tabella da un valore di testo HTML di esempio.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Estrae tutti gli HREF da un valore di testo HTML di esempio.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accesso ai dati
