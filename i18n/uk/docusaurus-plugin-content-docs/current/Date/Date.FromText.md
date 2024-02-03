---
title: Date.FromText
---

# Date.FromText


## Description

Створює дату з місцевого, всесвітнього та настроюваного форматів дати.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Створює значення типу <code>date</code> із текстового подання <code>text</code>. Можна вказати необов’язковий параметр <code>options</code> типу <code>record</code>, щоб зазначити додаткові властивості. Параметр типу <code>record</code> може включати в себе такі поля:<ul>   <li><code>Format</code> – має значення типу <code>text</code> і слугує, щоб задавати формат, який слід використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або встановити <code>Null</code>-значення, дата аналізуватиметься за найкращим варіантом.</li>   <li><code>Culture</code> – якщо <code>Format</code> не має Null-значення, <code>Culture</code> керує деякими специфікаторами формату, зокрема в <code>"en-US"</code> <code>"MMM"</code> передбачає значення <code>"Jan", "Feb", "Mar", …</code>, а в <code>"ru-RU"</code> <code>"MMM"</code> – <code>"янв", "фев", "мар", …</code>. Якщо <code>Format</code> має <code>Null</code>-значення, за <code>Culture</code> визначається стандартний формат, який слід використовувати. Якщо <code>Culture</code> має <code>Null</code>-значення або не вказано, використовується функція <code>Culture.Current</code>.</li></ul>Щоб забезпечити підтримку застарілих робочих циклів, для <code>options</code> також можна задавати текстове значення. У такому разі відбуватиметься те саме, що й з <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Перетворення &lt;code&gt;2010-12-31&lt;/code&gt; на значення &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Перетворення з використанням настроюваного формату та німецької культури.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Пошук у григоріанському календарі дати, яка відповідає початку 1400 року за календарем Хиджра.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
