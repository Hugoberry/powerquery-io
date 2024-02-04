---
title: Html.Table
---

# Html.Table


## Description

Gibt eine Tabelle zurück, die die Ergebnisse der Ausführung der angegebenen CSS-Selektoren für den bereitgestellten HTML-Code enthält.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Gibt eine Tabelle mit den Ergebnissen der Ausführung der angegebenen CSS-Selektoren für die Bereitstellung von "<code>html</code>" zurück. Ein optionaler Datensatzparameter, "<code>options</code>", kann zur Angabe zusätzlicher Eigenschaften angegeben werden. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Gibt eine Tabelle aus einem HTML-Beispieltextwert zurück.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Hiermit werden alle href-Attribute aus einem HTML-Beispieltextwert extrahiert.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Datenzugriff
