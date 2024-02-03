---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Берілген екі мәндердің теңдігін тексеруге байланысты логикалық мәнді береді.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Берілген <code>x</code> және <code>y</code> мәндерінің теңдігін <code>comparer</code> бойынша тексеруге байланысты <code>logical</code> мәнін береді.      <div>        <code>comparer</code> — салыстыруды басқару үшін қолданылатын <code>Comparer</code>.        Салыстыру — екі аргументті қабылдайтын және бірінші мән сәйкесінше екіншісінен кіші, оған тең немесе үлкен болса -1, 0 немесе 1 мәнін қайтаратын функция.        Салыстыру функцияларын пернетақта регистрінің есебімен немесе тіл стандарты мен аймақтық параметрлерді есепке алатын салыстыру үшін қолдануға болады.      </div>      <div>        Формула тілінде келесі кірістірілген салыстыру функциялары бар:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: пернетақта регистрінің есебімен реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>        <li> <code>Comparer.FromCulture</code>: тіл мен аймақтық параметрлерді есепке алып салыстыру үшін қолданылады</li>      </ul>


## Examples

### Example #1 
Мәндердің тең екендігін анықтау үшін &#34;en-US&#34; тілін пайдалана отырып &#34;1&#34; және &#34;A&#34; мәндерін тексеріңіз.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
