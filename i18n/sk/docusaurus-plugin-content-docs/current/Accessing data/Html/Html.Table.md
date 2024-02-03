---
title: Html.Table
---

# Html.Table


## Description

Vráti tabuľku obsahujúcu výsledky spustenia zadaných selektorov CSS na základe zadaného kódu HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Vráti tabuľku, ktorá obsahuje výsledky spustenia zadaných selektorov CSS pre zadaný prvok <code>html</code>. Na určenie ďalších vlastností možno zadať voliteľný parameter záznamu <code>options</code>. Záznam môže obsahovať nasledujúce polia:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Vráti tabuľku z hodnoty ukážkového textu html.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Extrahuje všetky reťazce hrefs z hodnoty vzorového textu html.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Pristupuje sa k údajom
