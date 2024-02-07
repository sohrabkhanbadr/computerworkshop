Attribute VB_Name = "Module1"
Option Explicit

Sub PaperFormat()

Dim rng As Range
Dim c As Integer

c = ActiveDocument.Paragraphs.Count

Set rng = ActiveDocument.Range(Start:=0, _
End:=ActiveDocument.Paragraphs(c).Range.End)

rng.Font.Name = "Times New Roman"
rng.Font.NameBi = "B Nazanin"

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
