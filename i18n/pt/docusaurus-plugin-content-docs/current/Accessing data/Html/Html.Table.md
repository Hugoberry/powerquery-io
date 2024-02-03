---
title: Html.Table
---

# Html.Table


## Description

Returns a table containing the results of running the specified CSS selectors against the provided HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Returns a table containing the results of running the specified CSS selectors against the provided <code>html</code>. An optional record parameter, <code>options</code>, may be provided to specify additional properties. The record can contain the following fields:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Returns a table from a sample html text value.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Extracts all the hrefs from a sample html text value.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
