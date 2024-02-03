---
title: Time.From
---

# Time.From


## Description

Ustvari časovno vrednost iz dane vrednosti.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Iz navedene vrednosti <code>value</code> vrne vrednost <code>time</code>. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").Če je navedena vrednost <code>value</code> <code>null</code>, <code>Time.From</code> vrne <code>null</code>. Če je navedena vrednost <code>value</code> <code>time</code>, je vrnjena vrednost <code>value</code>. V vrednost <code>time</code> lahko pretvorite vrednosti teh vrst:      <ul>        <li><code>text</code>: vrednost <code>time</code> iz predstavitve v obliki besedila. Za podrobnosti glejte <code>Time.FromText</code>.</li>        <li><code>datetime</code>: komponenta "time" za <code>value</code>.</li>        <li><code>datetimezone</code>: komponenta "time" lokalnega ekvivalenta "datetime" za <code>value</code>.</li>        <li><code>number</code>: ekvivalent <code>time</code> za število dni, izraženih z ulomki, predstavljen kot <code>value</code>. Če je <code>value</code> negativno ali večje od oz. enako 1, je vrnjena napaka.</li>      </ul>Če je vrednost <code>value</code> katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1 
Pretvorite &lt;code&gt;0.7575&lt;/code&gt; v vrednost &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Pretvorite &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; v vrednost &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
