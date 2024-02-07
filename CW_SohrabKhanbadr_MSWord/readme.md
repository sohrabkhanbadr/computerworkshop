# عنوان پروژه
نوشتن یک macro ساده به زبان vba برای مایکروسافت word

## راهنمای استفاده
از بخش ریبون، developer را فعال کرده وارد visual basic شوید و طبق آموزش sub یا پراسیجر مدنظر را ایجاد کرده و طبق جزوه ایجاد شده کار را به سر انجام برسانید.

## مثال‌های کد
```
Option Explicit

Sub PaperFormatTest()

Dim rng As Range
Dim c As Integer

c = ActiveDocument.Paragraphs.Count

Set rng = ActiveDocument.Range(Start:=0, _
End:=ActiveDocument.Paragraphs(c).Range.End)

rng.Font.Name = "Times New Roman"
rng.Font.NameBi = "Adobe Arabic"

rng.Paragraphs.SpaceAfter = 0
rng.Paragraphs.SpaceAfterAuto = 0

rng.Paragraphs.SpaceBefore = 0
rng.Paragraphs.SpaceBeforeAuto = 0

rng.Paragraphs.Alignment = wdAlignParagraphJustify

rng.Paragraphs.ReadingOrder = wdReadingOrderRtl


rng.ParagraphFormat.FirstLineIndent = CentimetersToPoints(0.5)


rng.Font.Size = 12
rng.Font.SizeBi = 14




End Sub
```

## منبع
[آموزش فرادرس](https://faradars.org/courses/fvvb9902-vba-for-automating-ms-office-applications)
