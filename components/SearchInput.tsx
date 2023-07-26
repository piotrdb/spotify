'use client';

import qs from 'query-string';
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Input from './Input';

type SearchProps = {};

const SearchInput: React.FC<SearchProps> = (props) => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 750);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({ url: '/search', query: query });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
