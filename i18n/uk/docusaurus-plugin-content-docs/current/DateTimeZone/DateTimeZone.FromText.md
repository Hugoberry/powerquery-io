---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Створює дату й час із місцевого, всесвітнього та настроюваного форматів дати й часу з часовим поясом.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Створює значення типу <code>datetimezone</code> із текстового подання <code>text</code>. Можна вказати необов’язковий параметр <code>options</code> типу <code>record</code>, щоб зазначити додаткові властивості. Параметр типу <code>record</code> може включати в себе такі поля:<ul>   <li><code>Format</code> – має значення типу <code>text</code> і слугує, щоб задавати формат, який слід використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або встановити <code>Null</code>-значення, дата аналізуватиметься за найкращим варіантом.</li>   <li><code>Culture</code> – якщо <code>Format</code> не має Null-значення, <code>Culture</code> керує деякими специфікаторами формату, зокрема в <code>"en-US"</code> <code>"MMM"</code> передбачає значення <code>"Jan", "Feb", "Mar", …</code>, а в <code>"ru-RU"</code> <code>"MMM"</code> – <code>"янв", "фев", "мар", …</code>. Якщо <code>Format</code> має <code>Null</code>-значення, за <code>Culture</code> визначається стандартний формат, який слід використовувати. Якщо <code>Culture</code> має <code>Null</code>-значення або не вказано, використовується функція <code>Culture.Current</code>.</li></ul>Щоб забезпечити підтримку застарілих робочих циклів, для <code>options</code> також можна задавати текстове значення. У такому разі відбуватиметься те саме, що й з <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Перетворення &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; на значення &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Перетворення з використанням настроюваного формату та німецької культури.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Перетворення з використанням ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
