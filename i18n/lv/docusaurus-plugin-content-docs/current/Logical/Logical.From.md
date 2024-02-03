---
title: Logical.From
---

# Logical.From


## Description

No norādītās vērtības tiek izveidota loģiskā vērtība.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Atgriež tipa <code>logical</code> vērtību, kas ir iegūta no norādītās vērtības <code>value</code>. Ja norādītā vērtība <code>value</code> ir <code>Null</code>, funkcija <code>Logical.From</code> atgriež vērtību <code>Null</code>.  Ja norādītā vērtība <code>value</code> ir <code>logical</code>, tiek atgriezta vērtība <code>value</code>. Par tipa <code>logical</code> vērtību var pārvērst tālāk norādīto tipu vērtības.      <ul>        <li><code>text</code>: no teksta vērtības, kas var būt <code>True</code> vai <code>False</code>, tiek iegūta tipa <code>logical</code> vērtība. Papildinformāciju skatiet sadaļā <code>Logical.FromText</code>.</li>        <li><code>number</code>: ja vērtība <code>value</code> ir vienāda ar <code>0</code>, tiek atgriezta vērtība <code>False</code>, pretējā gadījumā tiek atgriezta vērtība <code>True</code>.</li>      </ul>Ja vērtībai <code>value</code> ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1 
Pārvērtiet vērtību &lt;code&gt;2&lt;/code&gt; par tipa &lt;code&gt;logical&lt;/code&gt; vērtību.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
