---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

지정된 문화권 및 대/소문자 구분을 기반으로 비교자 함수를 반환합니다.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

비교를 수행하기 위해 <code>culture</code> 및 <code>ignoreCase</code>에 의해 지정된 대소문자 구분을 사용하는 비교 함수를 반환합니다.<br />       <br />       비교자 함수는 두 개의 인수를 받아들이고 첫 번째 값이 두 번째 값보다 작은지, 같은지, 큰지에 따라 -1, 0 또는 1을 반환합니다.<br />       <br />       <code>ignoreCase</code>의 기본값은 false입니다. <code>culture</code>은 .NET Framework에서 지원하는 로캘 중 하나여야 합니다(예: "en-US").    


## Examples

### Example #1 
&#34;en-US&#34; 로캘을 사용하여 &#34;a&#34;와 &#34;A&#34;를 비교한 후 값이 같은지 여부를 확인합니다.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
대/소문자 구분을 무시한 상태로 &#34;en-US&#34; 로캘을 사용하여 &#34;a&#34;와 &#34;A&#34;를 비교한 후 값이 같은지 여부를 확인합니다.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
