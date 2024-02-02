---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Import data from QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Returns a table listing the available tables in QuickBooks Online. An optional record parameter, <code>options</code>, may be specified to control the following options:          <ul>            <li><code>ConnectionTimeout</code>: A duration which controls how long to wait before abandoning an attempt to make a connection to the server.</li>            <li><code>CommandTimeout</code>: A duration which controls how long the server-side query is allowed to run before it is canceled.</li>          </ul>        The record parameter is specified as [option1 = value1, option2 = value2...].    


