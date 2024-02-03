---
title: AzureEnterprise.Contents
---

# AzureEnterprise.Contents


## Description

Nhập URL của điểm cuối API REST Azure Enterprise được liên kết với đăng ký của bạn


## Syntax

```powerquery
AzureEnterprise.Contents(
    url as text,
    optional query as record
) as binary
```


## Details

Trả về kết quả nhị phân của lệnh gọi tới url được cung cấp cho API Azure Enterprise.


## Examples

### Example #1 
Sử dụng hàm AzureEnterprise.Contents để trả về kết quả của một báo cáo cụ thể.
```powerquery
        cho phép
            báo cáo = Table.FromColumns({Lines.FromBinary(Binary.Buffer(AzureEnterprise.Contents("https://ea.azure.com/rest/12345/usage-report", [month="2014-04", type="summary", fmt="Csv"])),null,null,1252)}),
            bỏ qua = Table.Skip(report, 2),
            phân tách =  Table.SplitColumn(skips, "Column1", Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)),
            được đề xuất = Table.PromoteHeaders(split)
        trong
            được đề xuất
```

Result: 
```powerquery
Bảng
```



