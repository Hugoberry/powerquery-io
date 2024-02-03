---
title: Time.ToText
---

# Time.ToText


## Description

Vrne predstavitev časovne vrednosti v obliki besedila.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Vrne predstavitev podatkov <code>time</code> v obliki besedila. Naveden je lahko izbirni parameter <code>record</code>, <code>options</code>, za določanje dodatnih lastnosti. <code>culture</code> je uporabljen le za podedovane poteke dela. <code>record</code> lahko vključuje ta polja:<ul>   <li><code>Format</code>: vrednost <code>text</code> označuje obliko zapisa, ki jo želite uporabiti. Več informacij je na voljo na spletnih mestih https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost <code>null</code>, je datum zapisan v privzeti obliki zapisa, določeni za <code>Culture</code>.</li>   <li><code>Culture</code>: če za <code>Format</code> ni izbrana vrednost "null", <code>Culture</code> nadzira nekatere določitelje oblike zapisa. V <code>"en-US"</code> je na primer <code>"tt"</code> zapisan kot <code>"AM" ali "PM"</code>, medtem ko je v <code>"ar-EG"</code> vrednost <code>"MMM"</code> zapisana kot <code>"ص" ali "م"</code>. When <code>Format</code> is <code>null</code>, <code>Culture</code> controls the default format to use. Če je za <code>Culture</code> izbrana vrednost <code>null</code> ali je ta izpuščena, je uporabljena vrednost <code>Culture.Current</code>.</li></ul>Za uporabo podedovanih potekov lahko elementa <code>options</code> in <code>culture</code> prav tako vključujeta besedilni vrednosti. Vedenje je enako kot za <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Pretvorite &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; v vrednost &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Rezultat se lahko razlikuje glede na trenutno kulturo.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Pretvorite z obliko zapisa po meri in uporabo nemške kulture.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Pretvorite v standardni obliki zapisa ure.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
