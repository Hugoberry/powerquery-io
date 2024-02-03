---
title: Time.ToText
---

# Time.ToText


## Description

Повертає текстове представлення значення часу.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Повертає текстове представлення <code>time</code>. Можна вказати необов’язковий параметр <code>options</code> типу <code>record</code>, щоб зазначити додаткові властивості. <code>culture</code> використовується лише для застарілих робочих циклів. Параметр типу <code>record</code> може містити такі поля:<ul>   <li><code>Format</code> – значення типу <code>text</code>, що задає формат, який слід використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або вказати <code>Null</code>-значення, дата форматуватиметься за стандартним значенням, визначеним за полем <code>Culture</code>.</li>   <li><code>Culture</code> – якщо <code>Format</code> не має Null-значення, <code>Culture</code> керує деякими специфікаторами формату. Зокрема в <code>"en-US"</code> <code>"tt"</code> передбачає значення <code>"AM" або "PM"</code>, а в <code>"ar-EG"</code> <code>"tt"</code> – <code>"ص" або "م"</code>. Якщо <code>Format</code> має <code>Null</code>-значення, <code>Culture</code> визначає стандартний формат, який слід використовувати. Якщо <code>Culture</code> опущено або має <code>Null</code>-значення, використовується <code>Culture.Current</code>.</li></ul>Щоб забезпечити підтримку застарілих робочих циклів, для параметрів <code>options</code> і <code>culture</code> також можна задавати текстові значення. У такому разі відбуватиметься те саме, що й із <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Перетворення &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; на значення &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Результат може залежати від поточної культури.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Перетворення з використанням настроюваного формату та німецької культури.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Перетворення з використанням стандартного формату часу.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
