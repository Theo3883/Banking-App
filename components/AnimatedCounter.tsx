'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp 
        decimals={2}
        duration={1.5}
        decimal=","
        prefix="$"
        end={amount} 
      />
    </div>
  )
}

export default AnimatedCounter