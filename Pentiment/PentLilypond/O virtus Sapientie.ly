\version "2.24.3"
\language "nederlands"

\include "gregorian.ly"

\header {
  title = "O virtus Sapientie"
  subtitle = "Antiphon, R 466"
  composer = "St. Hildegard of Bingen"
  arranger = "Transcribed by Beverly R. Lomer"
  tagline = " "

}


 sapientie = \relative {
  \time 1/4
  \clef "treble_8"
   e( \melisma b' a b) s e d c b a g g g~( g c) b a g f e \melismaEnd s s s s \break
   e(  f)  e d  e e~( e g) b\slurUp c( d) \slurUp c( b e) d c b a( g a) b( c~ c b) \break
  c8 a4 g a~( a \magnifyMusic 0.63 { \grace) g } f( e) d g a c( b) a b \divisioMinima s4. s4 s s s s s s s \break 
  %oddly timed notes to keep spacing regular while using \override LyricText.self-alignment-X = #CENTER %
  b d e e e d c b a b  s s s s s s s s s s s s s s \break
  b( a) b( c) a( g) f( e) d e f g f( e) e s s s s s s s s s \break
  b'( a) b( c) a( g) a( \tieDown c~ c b) b s s s s s s s s s s s s s s s s \break
  e,( d) g g~( g b) b d( e) e( d) g e d c c b a( g a) b s s s \break
  d,( c) g' a b c( b) a g f e d e \divisioMinima s s s s s s s s s s s \break
  e( b'~ b) a b b b d e( d) c b a b \divisioMinima s s s s s s s s s s  \break
  b( c) a( g) a b b~( b d) c( b) a( g) a( g) f( e) d s s s s s s\break
  f f~( f a g) f( e) d( c) d e( f~ f e) e \divisioMinima  s s s s \bar "|."
}

sapLyr = \lyricmode {
\override LyricText.self-alignment-X = #CENTER

  O  
  vir - _ tus _ Sa -- pi -- en -- _ -  _ ti -- e 
  que _ _ cir -- cu -- i -- ens cir -- cu -- i -- sti
  com -- pre -- hen -- den -- do om -- ni -- _  _ _a
  in un -- a vi -- a que ha -- bet vi -- tam
  tres a -- las ha -- bens
  qua -- rum _ un -- a in al -- tum _ _ _ _ vo -- lat
  et al -- ter -- ra de ter -- ra su -- _ _ dat
  et ter -- ci -- a un -- di -- que vo -- _ _ lat
  laus ti -- bi sit _ si -- cut te de -- cet
  O Sa -- pi -- en -- ti -- _ a
}
\score {
  \new GregorianTranscriptionStaff <<
    \new GregorianTranscriptionVoice = "chant" {
      \sapientie
    }
    \new GregorianTranscriptionLyrics = "one" {
      \lyricsto "chant" \sapLyr
    }
  >>
  \layout {
    \context {
      \GregorianTranscriptionStaff
      measureBarType = ""
      \override BarLine.X-extent = #'(-1 . 1)
      \hide TupletNumber
      \hide TupletBracket
    }
  }
}