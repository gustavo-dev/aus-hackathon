import Image from 'next/image';

interface MiniCardProps {
  title: string;
  description: string;
  img?: string;
}

export const MiniCard: React.FC<MiniCardProps> = ({
  title,
  description,
  img = '/doctor_icon.svg',
}) => {
  return (
    <div className="card-item col-span-1 row-span-1 flex flex-grow gap-4 justify-center items-center box-border w-full">
      <div className="card-image min-h-full flex flex-grow items-center justify-center box-border">
        <div className="card-item-img relative w-16 h-16">
          <Image src={img} layout="fill" />
        </div>
      </div>
      <div className="card-text flex flex-col w-4/5">
        <p className="mb-6">{title}</p>
        <p className="text-sm flex-wrap">{description}</p>
      </div>
    </div>
  );
};
