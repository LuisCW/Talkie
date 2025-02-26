"use client";

import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function FormSelect({
  id,
  value,
  setValue,
  labelText,
  placeholder = "Ingresa una opción...",
  options = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasValue = value && value.trim() !== "";

  return (
    <div className="flex flex-col w-full gap-3">
      <label htmlFor={id} className="text-fgray-800 text-xl font-semibold">
        {labelText}:
      </label>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={isOpen}
            className={cn(
              "w-full justify-between px-3 py-[22px] rounded-md bg-fgray-200 border-[2px] text-lg focus:border-fgray-400",
              hasValue ? "border-fgray-400" : "border-fgray-400",
              "outline-none transition-all"
            )}
          >
            {hasValue
              ? options.find((option) => option.value === value)?.label
              : placeholder}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0"
          style={{ minWidth: "100%" }}
        >
          <Command>
            <CommandInput placeholder="Search..." className="h-9" />
            <CommandList>
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-between"
                  >
                    {option.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default FormSelect;
