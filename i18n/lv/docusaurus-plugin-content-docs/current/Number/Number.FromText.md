---
title: Number.FromText
---

# Number.FromText


## Description

No parasto teksta formātu (15, 3,423.10, 5,0E-10) vērtībām tiek izveidotas skaitliskās vērtības.


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Atgriež tipa <code>number</code> vērtību, kas ir iegūta no norādītās teksta vērtības <code>text</code>. <ul>  <li><code>text</code>: teksta formātā izteikta skaitliskā vērtība. Vērtībai ir jābūt izteiktai parastā skaitliskā formātā, piemēram, "15", "3423,10" vai "5,0E-10".</li>  <li><code>culture</code>: neobligāta kultūra, kas nosaka, kā tiek interpretēts parametrs <code>text</code> (piemēram, "lv-LV").</li> </ul>


## Examples

### Example #1 
Iegūstiet skaitlisko vērtību no vērtības &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Iegūstiet skaitlisko vērtību no vērtības &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
