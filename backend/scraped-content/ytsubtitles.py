from youtube_transcript_api import YouTubeTranscriptApi 
import os

text = ""
def get_subtitles(link):
    srt = YouTubeTranscriptApi.get_transcript(link) 
    for i in srt:
        text += i["text"] + "," 
    return text
