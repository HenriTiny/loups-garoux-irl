//SoundButton.tsx
import { useRef, useState } from 'react'
import { Play, Square } from 'lucide-react'

type SoundButtonProps = {
  label: string
  src: string
}

export function SoundButton({ label, src }: SoundButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const toggleSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src)
      audioRef.current.loop = true
    }

    if (playing) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    } else {
      audioRef.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <button style={{marginRight: "5px"}}
      className={`primary ${playing ? 'active' : ''}`}
      onClick={toggleSound}
    >
      <span>{label}</span>
      {playing ? (
        <Square size={13} />
      ) : (
        <Play size={13} />
      )}
      
    </button>
  )
}
