---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

Повертає текстове представлення значення дати та часу з часовим поясом.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

Повертає текстове подання <code>dateTimeZone</code>. Можна вказати необов’язковий параметр <code>options</code> типу <code>record</code>, щоб зазначити додаткові властивості. <code>culture</code> використовується лише для застарілих робочих циклів. Параметр типу <code>record</code> може включати в себе такі поля:<ul>   <li><code>Format</code> – має значення типу <code>text</code> і слугує, щоб задавати формат, який слід використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або встановити <code>Null</code>-значення, дата форматуватиметься за стандартним значенням, визначеним за полем <code>Culture</code>.</li>   <li><code>Culture</code> – якщо <code>Format</code> не має Null-значення, <code>Culture</code> керує деякими специфікаторами формату, зокрема в <code>"en-US"</code> <code>"MMM"</code> передбачає значення <code>"Jan", "Feb", "Mar", …</code>, а в <code>"ru-RU"</code> <code>"MMM"</code> – <code>"янв", "фев", "мар", …</code>. Якщо <code>Format</code> має <code>Null</code>-значення, за <code>Culture</code> визначається стандартний формат, який слід використовувати. Якщо <code>Culture</code> має <code>Null</code>-значення або не вказано, використовується функція <code>Culture.Current</code>.</li></ul>Щоб забезпечити підтримку застарілих робочих циклів, для параметрів <code>options</code> і <code>culture</code> також можна задавати текстові значення. У такому разі відбуватиметься те саме, що й з <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Перетворення &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; на значення &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Результат може залежати від поточної культури.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Перетворення з використанням настроюваного формату та німецької культури.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Перетворення з використанням шаблону ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
