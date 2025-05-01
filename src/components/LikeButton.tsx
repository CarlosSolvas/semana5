import { useEffect, useState } from 'react';

interface Props {
  id: string;
}

export default function LikeButton({ id }: Props) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(`likes-${id}`);
    if (stored) {
      setLikes(parseInt(stored));
    }
  }, [id]);

  const handleClick = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${id}`, newLikes.toString());
  };

  return (
    <button className="like-button" onClick={handleClick}>
      👍 Me gusta <span className="like-count">{likes}</span>
    </button>
  );
}
