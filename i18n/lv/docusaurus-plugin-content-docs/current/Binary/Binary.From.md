---
title: Binary.From
---

# Binary.From


## Description

Izveido bināro vērtību no sniegtās vērtības


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Atgriež <code>binary</code> vērtību no norādītās vērtības <code>value</code>. Ja norādītā vērtība <code>value</code> ir <code>Null</code>, <code>Binary.From</code> atgriež <code>Null</code>.  Ja norādītā vērtība <code>value</code> ir <code>binary</code>, tiek atgriezts <code>value</code>. Tālāk minēto tipu vērtības var pārvērst par <code>binary</code> vērtību.      <ul>        <li><code>text</code>: <code>binary</code> vērtība no teksta atveidojuma. Papildinformāciju skatiet sadaļā <code>Binary.FromText</code>.</li>      </ul>Ja vērtībai <code>value</code> ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1 
Iegūt &lt;code&gt;&#34;1011&#34;&lt;/code&gt; vērtību &lt;code&gt;binary&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
