---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Створює дату й час із часовим поясом із місцевого та всесвітнього форматів дати й часу.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Створює значення типу <code>datetime</code> із текстового подання <code>text</code>. Можна вказати необов’язковий параметр <code>options</code> типу <code>record</code>, щоб зазначити додаткові властивості. Параметр типу <code>record</code> може включати в себе такі поля:<ul>   <li><code>Format</code> – має значення типу <code>text</code> і слугує, щоб задавати формат, який слід використовувати. Додаткові відомості див. на сторінках https://go.microsoft.com/fwlink/?linkid=2180104 і https://go.microsoft.com/fwlink/?linkid=2180105. Якщо пропустити це поле або встановити <code>Null</code>-значення, дата аналізуватиметься за найкращим варіантом.</li>   <li><code>Culture</code> – якщо <code>Format</code> не має Null-значення, <code>Culture</code> керує деякими специфікаторами формату, зокрема в <code>"en-US"</code> <code>"MMM"</code> передбачає значення <code>"Jan", "Feb", "Mar", …</code>, а в <code>"ru-RU"</code> <code>"MMM"</code> – <code>"янв", "фев", "мар", …</code>. Якщо <code>Format</code> має <code>Null</code>-значення, за <code>Culture</code> визначається стандартний формат, який слід використовувати. Якщо <code>Culture</code> має <code>Null</code>-значення або не вказано, використовується функція <code>Culture.Current</code>.</li></ul>Щоб забезпечити підтримку застарілих робочих циклів, для <code>options</code> також можна задавати текстове значення. У такому разі відбуватиметься те саме, що й з <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Перетворення &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; на значення дати й часу.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Перетворення &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; на значення дати й часу.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Перетворення &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; на значення дати й часу.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Перетворення &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; на значення дати й часу.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
