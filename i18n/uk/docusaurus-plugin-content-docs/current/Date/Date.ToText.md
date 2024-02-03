---
title: Date.ToText
---

# Date.ToText


## Description

Повертає текстове представлення значення дати.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Повертає текстове подання <code>date</code>. Можна вказати необов’язковий параметр <code>options</code> типу <code>record</code>, щоб зазначити додаткові властивості. <code>culture</code> використовується лише для застарілих робочих циклів. Параметр типу <code>record</code> може включати в себе такі поля:<ul>   <li><code>Format</code> – має значення типу <code>text</code> і слугує, щоб задавати формат, який слід використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або встановити <code>Null</code>-значення, дата форматуватиметься за стандартним значенням, визначеним за полем <code>Culture</code>.</li>   <li><code>Culture</code> – якщо <code>Format</code> не має Null-значення, <code>Culture</code> керує деякими специфікаторами формату, зокрема в <code>"en-US"</code> <code>"MMM"</code> передбачає значення <code>"Jan", "Feb", "Mar", …</code>, а в <code>"ru-RU"</code> <code>"MMM"</code> – <code>"янв", "фев", "мар", …</code>. Якщо <code>Format</code> має <code>Null</code>-значення, за <code>Culture</code> визначається стандартний формат, який слід використовувати. Якщо <code>Culture</code> має <code>Null</code>-значення або не вказано, використовується функція <code>Culture.Current</code>.</li></ul>Щоб забезпечити підтримку застарілих робочих циклів, для параметрів <code>options</code> і <code>culture</code> також можна задавати текстові значення. У такому разі відбуватиметься те саме, що й з <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Перетворення &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; на значення &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Результат може залежати від поточної культури.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Перетворення з використанням настроюваного формату та німецької культури.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Пошук у календарі Хиджра року, який відповідає 1 січня 2000 р. за григоріанським календарем.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
