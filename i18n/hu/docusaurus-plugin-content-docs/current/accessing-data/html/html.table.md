---
title: Html.Table
---

# Html.Table


Egy olyan táblát ad vissza, amely a megadott CSS-választók megadott HTML-hez való futtatásának eredményeit tartalmazza.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Egy táblát ad vissza, amely a megjelölt CSS-választók a megadott `html` alapján történő futtatásának eredményeit tartalmazza. Egy opcionális rekordparaméter (`options`) is megadható további tulajdonságok beállításához. A rekord a következő mezőket tartalmazhatja:

-   `RowSelector`


## Examples

### Example #1
Egy táblát ad vissza egy HTML formátumú szöveges mintaérték alapján.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2
Minden href elemet kinyer egy minta html-szövegértékből.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
