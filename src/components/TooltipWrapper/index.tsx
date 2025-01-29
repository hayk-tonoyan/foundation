import React, { ReactNode } from 'react';

import { StyledTooltipContent } from './style';
import { Tooltip, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

type TooltipWrapperPropsType = {
  trigger: ReactNode;
  content: ReactNode;
  side?: 'left' | 'right' | 'top' | 'bottom';
};

export default function TooltipWrapper({
  trigger,
  content,
  side = 'top',
}: TooltipWrapperPropsType) {
  if (!content) {
    return trigger;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span>{trigger}</span>
        </TooltipTrigger>
        <StyledTooltipContent side={side}>
          <p>{content}</p>
        </StyledTooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
