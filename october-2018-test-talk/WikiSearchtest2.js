test('fetches search results from Wikipedia', async () => {
  const { getByPlaceholderText, getByText } = render(<WikiSearch />);

  const input = getByPlaceholderText('Enter search...');

  fireEvent.input(input, { target: { value: 'George Washington' } });

  const btn = getByText('Search Wikipedia');

  fireEvent.click(btn);

  await waitForElement(() => getByText('George Washington Carver'));
});