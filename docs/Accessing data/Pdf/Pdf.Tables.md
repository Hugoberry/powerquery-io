---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Returns any tables found in a PDF file.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Returns any tables found in <code>pdf</code>. An optional record parameter, <code>options</code>, may be provided to specify additional properties. The record can contain the following fields:    <ul><li><code>Implementation</code> : The version of the algorithm to use when identifying tables. Old versions are available only for backwards compatibility, to prevent old queries from being broken by algorithm updates. The newest version should always give the best results. Valid values are &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot;, or null.</li><li><code>StartPage</code> : Specifies the first page in the range of pages to examine. Default: 1.</li><li><code>EndPage</code> : Specifies the last page in the range of pages to examine. Default: the last page of the document.</li><li><code>MultiPageTables</code> : Controls whether similar tables on consecutive pages will be automatically combined into a single table. Default: true.</li><li><code>EnforceBorderLines</code> : Controls whether border lines are always enforced as cell boundaries (when true), or simply used as one hint among many for determining cell boundaries (when false). Default: false.</li></ul>    


## Examples

### Example #1 
Returns the tables contained in sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Accessing data
