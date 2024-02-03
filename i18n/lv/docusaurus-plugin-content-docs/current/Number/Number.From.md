---
title: Number.From
---

# Number.From


## Description

No norādītās vērtības tiek izveidots skaitlis.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Atgriež tipa <code>number</code> vērtību, kas ir iegūta no norādītās vērtības <code>value</code>. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").Ja norādītā vērtība <code>value</code> ir <code>Null</code>, funkcija <code>Number.From</code> atgriež vērtību <code>Null</code>. Ja norādītās vērtības <code>value</code> tips ir <code>number</code>, tiek atgriezta vērtība <code>value</code>. Par tipa <code>number</code> vērtību var pārvērst tālāk norādīto tipu vērtības.      <ul>        <li><code>text</code>: <code>number</code> vērtība no teksta atveidojuma. Var apstrādāt parastos teksta formātus (15, 3,423.10, 5,0E-10). Papildinformāciju skatiet sadaļā <code>Number.FromText</code>.</li>        <li><code>logical</code>: vērtībai <code>True</code> atbilst skaitlis1, bet vērtībai <code>False</code>— skaitlis0.</li><code>value</code>        <li><code>datetime</code>: dubultprecizitātes peldošā komata skaitlis, kurā ir ietverts OLEautomatizācijas datuma ekvivalents.</li>        <li><code>datetimezone</code>: dubultprecizitātes peldošā komata skaitlis, kurā ir ietverts  vietējā datuma un laika OLEautomatizācijas datuma ekvivalents.</li>        <li><code>date</code>: dubultprecizitātes peldošā komata skaitlis, kurā ir ietverts OLEautomatizācijas datuma ekvivalents.</li>        <li><code>time</code>: vērtība ir izteikta dienas daļās.</li><code>value</code>        <li><code>duration</code>: vērtība ir izteikta veselās dienās un dienas daļās.</li>      </ul>Ja vērtībai  ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1 
Iegūstiet &lt;code&gt;number&lt;/code&gt; vērtību no vērtības &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Iegūstiet tipa &lt;code&gt;number&lt;/code&gt; vērtību no vērtības &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Iegūstiet izteiksmes &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; vērtību &lt;code&gt;number&lt;/code&gt;.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
