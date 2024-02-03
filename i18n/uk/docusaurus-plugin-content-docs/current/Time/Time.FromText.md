---
title: Time.FromText
---

# Time.FromText


## Description

Створює час із місцевого, всесвітнього та настроюваного форматів часу.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Створює значення типу <code>time</code> із текстового представлення <code>text</code>. Можна вказати необов’язковий параметр <code>options</code> типу <code>record</code>, щоб зазначити додаткові властивості. Параметр типу <code>record</code> може містити такі поля:<ul>   <li><code>Format</code> – значення типу <code>text</code>, що задає формат, який слід використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або вказати <code>Null</code>-значення, час аналізуватиметься за найкращим варіантом.</li>   <li><code>Culture</code> – якщо <code>Format</code> не має Null-значення, <code>Culture</code> керує деякими специфікаторами формату. Зокрема в <code>"en-US"</code> <code>"tt"</code> передбачає значення <code>"AM" або "PM"</code>, а в <code>"ar-EG"</code> <code>"tt"</code> – <code>"ص" або "م"</code>. Якщо <code>Format</code> має <code>Null</code>-значення, <code>Culture</code> визначає стандартний формат, який слід використовувати. Якщо <code>Culture</code> опущено або має <code>Null</code>-значення, використовується <code>Culture.Current</code>.</li></ul>Щоб забезпечити підтримку застарілих робочих циклів, для <code>options</code> також можна задавати текстове значення. У такому разі відбуватиметься те саме, що й із <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Перетворити &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; на значення часу.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Перетворіть значення &lt;code&gt;&#34;1012&#34;&lt;/code&gt; на значення часу.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Перетворіть значення &lt;code&gt;&#34;10&#34;&lt;/code&gt; на значення часу.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
